import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [197],
	set: Set,
	name: {
		'en-us': "Umbreon ex",
		'fr-fr': "Noctali-ex",
		'es-es': "Umbreon ex",
		'pt-br': "Umbreon ex",
		'it-it': "Umbreon-ex",
		'de-de': "Nachtara-ex"
	},
	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'pt-br': "Eevee",
		'it-it': "Eevee",
		'de-de': "Evoli"
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: {
				'en-us': "Moon Mirage",
				'fr-fr': "Mirage Lunaire",
				'es-es': "Espejismo Lunar",
				'pt-br': "Miragem Lunar",
				'it-it': "Miraggio Lunare",
				'de-de': "Mondillusion"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 160
		},
		{
			cost: ["Lightning", "Psychic", "Darkness"],
			name: {
				'en-us': "Onyx",
				'fr-fr': "Onyx",
				'es-es': "Ónice",
				'pt-br': "Ônix",
				'it-it': "Onice",
				'de-de': "Onyx"
			},
			effect: {
				'en-us': "Discard all Energy from this Pokémon, and take a Prize card.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon, puis récupérez une carte Récompense.",
				'es-es': "Descarta todas las Energías de este Pokémon y coge 1 carta de Premio.",
				'pt-br': "Descarte todas as Energias deste Pokémon e pegue uma carta de Prêmio.",
				'it-it': "Scarta tutte le Energie da questo Pokémon e prendi una carta Premio.",
				'de-de': "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und nimm 1 Preiskarte."
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
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 850983,
				tcgplayer: 655094
			}
		}
	],
}

export default card
