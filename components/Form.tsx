import { useRouter } from "next/router";
import React, { useState } from "react";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

type Props = {};

const Form = (props: Props) => {
  let bookCategories: string[] = [
    "Fiction",
    "Non-fiction",
    "Children's books",
    "Young adult (YA) books",
    "Romance",
    "Science fiction (Sci-fi)",
    "Mystery",
    "Thriller",
    "Horror",
    "Fantasy",
    "Historical fiction",
    "Biography",
    "Autobiography",
    "Memoir",
    "Self-help",
    "Business and finance",
    "Travel",
    "Cookbooks",
    "Art and photography",
    "Philosophy",
    "Religion and spirituality",
    "Education",
    "Science and technology",
    "Sports",
    "Poetry",
    "Drama",
    "Comics and graphic novels",
  ];
  const router = useRouter();
  const [Author, setAuthor] = useState<string>("");
  const [Category, setCategory] = useState<string>("Fiction");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: "/book",
      query: {
        Author,
        Category,
      },
    });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} className="w-full h-full p-4 space-y-10">
      <div className="form-control">
        <label className="input-group">
          <span>Author</span>
          <input
            type="text"
            placeholder="Author name"
            className="input input-bordered input-primary w-full focus:outline-none"
            value={Author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </label>
      </div>

        <div className="form-control">
          <label className="input-group">
            <span>Category</span>
            <select
              className="select  select-primary focus:outline-none"
              defaultValue={Category}
              value={Category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {bookCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
        </div>

      <div className="flex justify-center mt-8">
        <button type="submit" className="btn gap-2 no-animation">
          Random Book
          <GiPerspectiveDiceSixFacesRandom className="h-7 w-7" />
        </button>
      </div>
    </form>
  );
};

export default Form;
