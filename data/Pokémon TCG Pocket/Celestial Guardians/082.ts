import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Palossand",
		fr: "Trépassable",
		es: "Palossand",
		it: "Palossand",
		de: "Colossand",
		'pt-br': "Palossand",
		ko: "모래성이당"
	},

	illustrator: "OOYAMA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [770],
	hp: 130,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sandygast"
	},

	description: {
		en: "The terrifying Palossand drags smaller Pokémon into its sandy body. Once its victims are trapped, it drains them of their vitality whenever it pleases.",
		fr: "Trépassable est terrifiant. Il attire de petits\nPokémon à l'intérieur de son corps de sable\nafin d'aspirer leur énergie vitale à sa guise.",
		es: "Un Pokémon terrorífico que atrapa a Pokémon pequeños dentro\nde su cuerpo arenoso y les absorbe la vitalidad cuando se le antoja.",
		it: "Questo Pokémon spaventoso trascina nel suo corpo sabbioso\ni Pokémon più piccoli e ne assorbe l'energia vitale quando gli pare.",
		de: "Das furchterregende Colossand zieht kleinere\nPokémon in seinen Körper aus Sand und saugt\nihnen nach Belieben die Lebenskraft aus.",
		'pt-br': "O aterrorizante Palossand puxa Pokémon menores\npara dentro de seu corpo arenoso. Depois de prender\nas vítimas, absorve a energia vital delas sempre que desejar.",
		ko: "작은 포켓몬을 모래로 된 몸 안으로\n끌어들인 뒤, 자신이 원할 때\n생기를 빨아들이는 무서운 포켓몬."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			it: "Colpomistero",
			de: "Spukschuss",
			'pt-br': "Tiro Assustador",
			ko: "홀로숏"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card