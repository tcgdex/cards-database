import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Jirachi-EX",
		fr: "Jirachi EX",
		es: "Jirachi-EX",
		it: "Jirachi-EX",
		pt: "Jirachi-EX",
		de: "Jirachi-EX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 90,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stellar Guidance",
				fr: "Bonne Étoile",
				es: "Guía Estelar",
				it: "Guidastellare",
				pt: "Orientação Estelar",
				de: "Sternennavigation"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench, you may search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez chercher une carte Supporter dans votre deck, la montrer et l’ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Cuando juegues a este Pokémon de tu mano para ponerlo en tu Banca, puedes buscar en tu baraja una carta de Partidario, enseñarla y ponerla en tu mano. Baraja las cartas de tu baraja después.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi cercare nel tuo mazzo una carta Aiuto, mostrarla e aggiungerla a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Ao jogar este Pokémon da sua mão no Banco, você pode procurar um card de Apoiador em seu baralho e colocá-lo em sua mão. Em seguida, embaralhe seus cards.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst und auf deine Bank legst, kannst du dein Deck nach einer Unterstützerkarte durchsuchen, sie deinem Gegner zeigen und auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypnostrike",
				fr: "Choc Sommeil",
			},
			effect: {
				en: "Both this Pokémon and the Defending Pokémon are now Asleep.",
				fr: "Ce Pokémon et le Pokémon Défenseur sont maintenant Endormis.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
