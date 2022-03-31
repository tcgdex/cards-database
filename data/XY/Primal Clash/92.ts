import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Crawdaunt",
		fr: "Colhomard",
		es: "Crawdaunt",
		it: "Crawdaunt",
		pt: "Crawdaunt",
		de: "Krebutack"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Corphish",
		fr: "Écrapince",
		es: "Corphish",
		it: "Corphish",
		pt: "Corphish",
		de: "Krebscorps"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unruly Claw",
				fr: "Pince Rebelle",
				es: "Garra Rebelde",
				it: "Artiglio Ribelle",
				pt: "Garra Desregrada",
				de: "Unbändige Schere"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l'un de vos Pokémon, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
				es: "Cuando juegues a este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon, puedes descartar 1 Energía unida al Pokémon Activo de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon, puoi scartare un'Energia assegnata al Pokémon attivo del tuo avversario.",
				pt: "Ao jogar este Pokémon da sua mão para evoluir 1 dos seus Pokémon, você pode descartar uma Energia ligada ao Pokémon Ativo do seu oponente.",
				de: "Wenn du dieses Pokémon von deiner Hand spielst, um 1 deiner Pokémon zu entwickeln, kannst du 1 Energie, die an das Aktive Pokémon deines Gegners angelegt ist, auf den Ablagestapel deines Gegners legen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-Masse",
				es: "Martillazo",
				it: "Martellata",
				pt: "Martelo Caranguejo",
				de: "Krabbhammer"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
