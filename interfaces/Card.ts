import Type from "./Type";
import Category from "./Category";
import Tag from "./Tag";
import LangList from "./LangList";
import Rarity from "./Rarity";
import Attack from "./Attack";
import Illustrator from "./Illutrator";
import Ability from "./Ability";
import Set from "./Set";

interface Card {

	// global id made of setid and localId
	id: string

	// set id
	localId: string|number

	dexId?: number

	// Card informations (from top to bottom of card)
	name: LangList<string>
	hp?: number //optionnal because energy/trainer cards might have not any hp
	type?: Array<Type> // ex for multiple https://api.pokemon.com/us/pokemon-tcg/pokemon-cards/ex-series/ex13/17/

	image?: {
		low: LangList<string>
		high?: LangList<string>
	}

	evolveFrom?: LangList<string>
	evolveTo?: Array<LangList<string>>
	tags: Array<Tag> // made after
	illustrator?: Illustrator|string

	abilities?: Array<Ability>

	attacks?: Array<Attack>

	// If card is trainer or energy effect is here
	effect?: LangList<string>

	weaknesses?: Array<{
		type: Type
		value?: string
	}>

	resistances?: Array<{
		type: Type
		value?: string
	}>

	retreat?: number

	rarity: Rarity

	// Other elements
	category: Category
	set: {
		name: string
		code: string
	}| Set
}

export default Card
