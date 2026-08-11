import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [890],
	set: Set,

	name: {
		'en-us': "Radiant Eternatus",
		'fr-fr': "Éthernatos Radieux",
		'es-es': "Eternatus Radiante",
		'it-it': "Eternatus Lucente",
		'pt-br': "Eternatus Radiante",
		'de-de': "Strahlendes Endynalos"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Climactic Gate",
			'fr-fr': "Portail du Summum",
			'es-es': "Portal Culminante",
			'it-it': "Portale Apogeo",
			'pt-br': "Portal Absoluto",
			'de-de': "Kulminationsportal"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for up to 2 Pokémon VMAX and put them onto your Bench. Then, shuffle your deck. If you use this Ability, your turn ends.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez chercher dans votre deck jusqu'à 2 Pokémon-VMAX, puis les placer sur votre Banc. Mélangez ensuite votre deck. Si vous utilisez ce talent, votre tour se termine.",
			'es-es': "Cuando juegas este Pokémon de tu mano a tu Banca durante tu turno, puedes buscar en tu baraja hasta 2 Pokémon VMAX y ponerlos en tu Banca. Después, baraja las cartas de tu baraja. Si usas esta habilidad, tu turno termina.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi cercare nel tuo mazzo fino a due Pokémon-VMAX e metterli nella tua panchina. Poi rimischia le carte del tuo mazzo. Se usi questa abilità, il tuo turno finisce.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para o seu Banco durante o seu turno, você poderá procurar por até 2 Pokémon VMAX no seu baralho e colocá-los no seu Banco. Em seguida, embaralhe o seu baralho. Se você usar esta Habilidade, o seu turno acabará.",
			'de-de': "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du dein Deck nach bis zu 2 Pokémon-VMAX durchsuchen und sie auf deine Bank legen. Mische anschließend dein Deck. Wenn du diese Fähigkeit einsetzt, endet dein Zug."
		}
	}],

	attacks: [{
		cost: ["Fire", "Darkness", "Colorless"],

		name: {
			'en-us': "Power Beam",
			'fr-fr': "Puissant Rayon",
			'es-es': "Rayo de Luz Poderoso",
			'it-it': "Raggiopotenza",
			'pt-br': "Raio de Poder",
			'de-de': "Power-Strahl"
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "The core on its chest absorbs energy emanating from the lands of the Galar region. This energy is what allows Eternatus to stay active.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691824,
				tcgplayer: 478216
			}
		},
	],
}

export default card
