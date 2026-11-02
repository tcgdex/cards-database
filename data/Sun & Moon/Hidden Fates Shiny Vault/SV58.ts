import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Xurkitree-GX",
		fr: "Câblifère-GX",
		de: "Voltriant-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 180,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flashing Head",
				fr: "Tête Clignotante",
				de: "Leuchtender Kopf"
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
				fr: "Évitez tous les dégâts d’attaque infligés à ce Pokémon par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
				de: "Verhindere allen Schaden, der diesem Pokémon durch Attacken von Pokémon deines Gegners, an die mindestens 1 Spezial-Energie angelegt ist, zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Rumbling Wires",
				fr: "Câbles Grondants",
				de: "Rumpelnde Kabel"
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				de: "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 100,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Lighting-GX",
				fr: "Éclair-GX",
				de: "Beleuchten-GX"
			},
			effect: {
				en: "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
				fr: "Votre adversaire dévoile sa main. Ajoutez une des cartes que vous y trouvez à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Dein Gegner zeigt dir seine Handkarten. Füge 1 Karte, die du dort findest, verdeckt seinen Preiskarten hinzu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
