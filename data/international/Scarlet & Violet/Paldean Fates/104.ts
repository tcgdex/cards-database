import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [930],
	set: Set,

	name: {
		'en-us': "Arboliva",
		'fr-fr': "Arboliva",
		'es-es': "Arboliva",
		'it-it': "Arboliva",
		'pt-br': "Arboliva",
		'de-de': "Olithena"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Dolliv",
		'fr-fr': "Olivado",
		'es-es': "Dolliv",
		'it-it': "Dolliv",
		'pt-br': "Dolliv",
		'de-de': "Olivinio"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Enriching Oil",
			'fr-fr': "Huile Enrichissante",
			'es-es': "Aceite Nutritivo",
			'it-it': "Olio Nutriente",
			'pt-br': "Azeite Enriquecedor",
			'de-de': "Anreicherndes Öl"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may heal all damage from 1 of your Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon pendant votre tour, vous pouvez soigner tous les dégâts de l'un de vos Pokémon.",
			'es-es': "Cuando juegas este Pokémon de tu mano para hacer evolucionar a uno de tus Pokémon durante tu turno, puedes curar todos los puntos de daño a uno de tus Pokémon.",
			'it-it': "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi curare uno dei tuoi Pokémon da tutti i danni.",
			'pt-br': "Quando você jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante o seu turno, você poderá curar todo o dano de 1 dos seus Pokémon.",
			'de-de': "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du allen Schaden bei 1 deiner Pokémon heilen."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Solar Beam",
			'fr-fr': "Lance-Soleil",
			'es-es': "Rayo Solar",
			'it-it': "Solarraggio",
			'pt-br': "Raio Solar",
			'de-de': "Solarstrahl"
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751643,
				tcgplayer: 534476,
				cardtrader: 274288
			}
		},
	],

	illustrator: "Hideki Ishikawa",

	description: {
		'en-us': "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
	},

}

export default card
