import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [743],
	set: Set,

	name: {
		en: "Lillie's Ribombee",
		pt: "Ribombee da Lillie",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Inviting Wink",
			pt: "Piscadela Convidativa",
		},

		effect: {
			en: "When you play this Pokémon from yuor hand to evolve I of your Pokémon during your turn, you may have your opponent revel their hand and you put any number of Basic Pokémon you find there onto their Bench.",
			pt: "Quando você joga este Pokémon da sua mão para evoluir um dos seus Pokémon durante o seu turno, você pode fazer com que seu oponente revele a mão dele e você coloca qualquer número de Pokémon Básicos que encontrar lá no Banco dele.",
		}
	}],

	attacks: [
		{
			cost: ["Psychic"],

			name: {
				en: "Magical Shot",
				pt: "Tiro Mágico",
			},
			
			damage: 50
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 0,
	regulationMark: "I"
}

export default card