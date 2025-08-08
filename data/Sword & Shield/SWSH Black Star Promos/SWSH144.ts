import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [658],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Greninja {star}",
		fr: "Amphinobi {star}",
		de: "Quajutsu {star}",
		es: "Greninja {star}",
		pt: "Greninja {star}",
		it: "Greninja {star}"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Masakazu Fukuda",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Shadow Knife"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Mist Slash",
			fr: "Tranche-Brume",
			de: "Schleierschlitzer",
			es: "Golpe Niebla",
			pt: "Golpe de Névoa",
			it: "Squarcianebbia"
		},

		damage: 100,

		effect: {
			en: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario."
		}
	}],

	retreat: 1
}

export default card