import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		en: "Umbreon ex",
		fr: "Noctali-ex",
		es: "Umbreon ex",
		it: "Umbreon-ex",
		pt: "Umbreon ex",
		de: "Nachtara-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: ["Darkness", "Colorless", "Colorless"],

			name: {
				en: "Moon Mirage",
				fr: "Mirage Lunaire",
				es: "Espejismo Lunar",
				it: "Miraggio Lunare",
				pt: "Miragem Lunar",
				de: "Mondillusion"
			},

			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

			damage: 160
		},
		{
			cost: ["Lightning", "Psychic", "Darkness"],

			name: {
				en: "Onyx",
				fr: "Onyx",
				es: "Ónice",
				it: "Onice",
				pt: "Ônix",
				de: "Onyx"
			},

			effect: {
				en: "Discard all Energy from this Pokémon, and take a Prize card.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon, puis récupérez une carte Récompense.",
				es: "Descarta todas las Energías de este Pokémon y coge 1 carta de Premio.",
				it: "Scarta tutte le Energie da questo Pokémon e prendi una carta Premio.",
				pt: "Descarte todas as Energias deste Pokémon e pegue uma carta de Prêmio.",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und nimm 1 Preiskarte."
			}
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,
	regulationMark: "H",
	illustrator: "5ban Graphics"
}

export default card

