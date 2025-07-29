import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Team Galactic's Invention G-103 Power Spray",
		fr: "Spray Puissant Invention G-103 de Team Galaxie",
		de: "Team Galaktiks Erfindung G-103 Kraftspray"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous pouvez jouer cette carte lors du tour de votre adversaire lorsque le Pokémon de votre adversaire utilise un Poké-Power. Prévenez tous les effets de ce Poké-Power. (Cela compte comme si ce Pokémon utilisait son Poké-Power.) Si vous avez un maximum de 2 Pokémon SP en jeu, vous ne pouvez pas jouer cette carte.",
		de: "You may play this card during your opponent's next turn when your opponent's Pokémon uses any Poké-Power: Prevent all effects of that Poké-Power. (This counts as that Pokémon using its Poké-Power). If you have 2 or less Pokémon SP in play, you can't play this card."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278538
	}
}

export default card
