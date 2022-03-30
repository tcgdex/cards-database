import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Swellow",
		fr: "Hélédelle",
		es: "Swellow",
		it: "Swellow",
		pt: "Swellow",
		de: "Schwalboss"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		277,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Taillow",
		fr: "Nirondelle",
		es: "Taillow",
		it: "Taillow",
		pt: "Taillow",
		de: "Schwalbini"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Plus Δ",
				en: "Δ Plus",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
				en: "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				es: "{title}: Si el Pokémon de tu rival queda Fuera de Combate por el daño de un ataque de este Pokémon, coge 1 carta de Premio más.",
				it: "{title}: Se un Pokémon del tuo avversario viene messo KO dai danni di un attacco di questo Pokémon, prendi una carta Premio in più.",
				pt: "{title}: Se o Pokémon de seu oponente for Nocauteado por danos causados por um ataque deste Pokémon, pegue mais 1 card de Prêmio.",
				de: "{title}: Wenn das Pokémon deines Gegners durch Schaden eines Angriffs dieses Pokémon kampfunfähig wird, nimm 1 zusätzliche Preiskarte."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				es: "Picotazo",
				it: "Beccata",
				pt: "Bicada",
				de: "Schnabel"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
				es: "Ataque Ala",
				it: "Attacco d'Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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



}

export default card
