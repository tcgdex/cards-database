import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
		es: "Giratina",
		it: "Giratina",
		pt: "Giratina",
		de: "Giratina"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dimension Breach",
				fr: "Transgression Dimensionnelle",
				es: "Brecha Dimensional",
				it: "Breccia Dimensionale",
				pt: "Brecha Dimensional",
				de: "Dimensionsbruch"
			},
			effect: {
				en: "When you play this Pokémon from your hand onto your Bench during your turn, you may discard a Special Energy from your opponent’s Active Pokémon.",
				fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez défausser une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano a tu Banca durante tu turno, puedes descartar 1 Energía Especial del Pokémon Activo de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano e lo metti in panchina durante il tuo turno, puoi scartare un’Energia speciale assegnata al Pokémon attivo del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para o seu Banco durante a sua vez de jogar, você pode descartar 1 Energia Especial do Pokémon Ativo do seu oponente.",
				de: "Wenn du dieses Pokémon während deines Zuges aus deiner Hand auf deine Bank spielst, kannst du 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fade to Black",
				fr: "Fondu au Noir",
				es: "Ennegrecer",
				it: "Svanire nel Buio",
				pt: "Breu",
				de: "Schwarz vor Augen"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388237,
		tcgplayer: 195016
	}
}

export default card
