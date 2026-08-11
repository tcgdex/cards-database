import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [658],
	set: Set,
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		'en-us': "Greninja ☆",
		'fr-fr': "Amphinobi ☆",
		'de-de': "Quajutsu ☆",
		'es-es': "Greninja ☆",
		'pt-br': "Greninja ☆",
		'it-it': "Greninja ☆"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Basic",
	illustrator: "Masakazu Fukuda",

	abilities: [{
		type: "Poke-POWER",

		name: {
			'en-us': "Shadow Knife",
			'fr-fr': "Poignard Ombre"
		},

		effect: {
			'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent's Pokémon.",
			'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez placer un marqueur de dégâts sur l'un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Mist Slash",
			'fr-fr': "Tranche-Brume",
			'de-de': "Schleierschlitzer",
			'es-es': "Golpe Niebla",
			'pt-br': "Golpe de Névoa",
			'it-it': "Squarcianebbia"
		},

		damage: 100,

		effect: {
			'en-us': "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert.",
			'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia, o por ningún efecto en el Pokémon Activo de tu rival.",
			'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência, ou por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza, o da alcun effetto presente sul Pokémon attivo del tuo avversario."
		}
	}],

	retreat: 1,

	thirdParty: {
		tcgplayer: 248731
	}
}

export default card
