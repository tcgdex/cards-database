import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat"
	},

	description: {
		en: "Both of its legs have turned into wings. Without a<br />sound, Crobat flies swiftly toward its prey and<br />sinks its fangs into the nape of its target's neck."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Cunning Link"
		},

		effect: {
			en: "Once during your turn, if you have <a class=\"localized-string__link\" href=\"/pokemon/arceus/\">Arceus</a> or <a class=\"localized-string__link\" href=\"/pokemon/arceus-ex/\">Arceus ex</a> in play, you may do 30 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Darkness Fang"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0
}

export default card