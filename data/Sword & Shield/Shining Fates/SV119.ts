import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Métamorph VMAX",
		en: "Ditto VMAX",
		es: "Ditto VMAX",
		it: "Ditto VMAX",
		pt: "Ditto VMAX",
		de: "Ditto VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Métamorph-V",
		en: "Ditto V"
	},

	attacks: [{
		name: {
			fr: "Morphomax",
			en: "Max Transform",
			es: "Maxitransformación",
			it: "Dynatrasformazione",
			pt: "Transformação Max",
			de: "Dyna-Wandler"
		},

		effect: {
			fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			es: "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
			de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",
	stage: "VMAX"
}

export default card
