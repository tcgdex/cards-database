import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Grumpig",
		fr: "Groret",
		es: "Grumpig",
		it: "Grumpig",
		pt: "Grumpig",
		de: "Groink"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		326,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Spoink",
		fr: "Spoink",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mirror Step",
				fr: "Pas Dupliqué",
				es: "Paso Espejo",
				it: "Passo Riflesso",
				pt: "Passo Espelhado",
				de: "Spiegelschritt"
			},
			effect: {
				en: "If 1 of your opponent’s Pokémon in play has the same name as 1 of your Pokémon in play, this attack does 70 more damage.",
				fr: "Si l’un des Pokémon en jeu de votre adversaire a le même nom que l’un de vos Pokémon en jeu, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Si 1 de los Pokémon en juego de tu rivaI tiene el mismo nombre que 1 de tus Pokémon en juego, este ataque hace 70 puntos de daño más.",
				it: "Se uno dei Pokémon in gioco del tuo avversario ha lo stesso nome di uno dei tuoi Pokémon in gioco, questo attacco infligge 70 danni in più.",
				pt: "Se 1 dos Pokémon do seu oponente em jogo tiver o mesmo nome que 1 dos seus Pokémon em jogo, este ataque causará 70 pontos de dano a mais.",
				de: "Wenn 1 Pokémon deines Gegners im Spiel denselben Namen wie 1 deiner Pokémon im Spiel hat, fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
