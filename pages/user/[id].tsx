import { useRouter} from "next/router";

const EditUser = () => {
    const router  = useRouter();
    const { id, ...rest} = router.query;

    return (
      <>
          <h2> User Edit Id ={id}</h2>
          <pre> {JSON.stringify(rest)}</pre>
      </>
    );
};

export default EditUser;
