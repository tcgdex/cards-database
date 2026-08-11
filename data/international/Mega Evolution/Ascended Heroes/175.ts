import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Komala",
		'fr-fr': "Dodoala d'Okuba",
		'es-es': "Komala de Laureano",
		'es-mx': "Komala de Laureano",
		'de-de': "Aokis Koalelu",
		'it-it': "Komala di Ubaldo",
		'pt-br': "Komala do Lauro"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Lethargic Charge",
			'fr-fr': "Charge Léthargique",
			'es-es': "Carga Letárgica",
			'es-mx': "Carga Letárgica",
			'de-de': "Lethargischer Aufbau",
			'it-it': "Carica Letargica",
			'pt-br': "Carga Letárgica"
		},

		effect: {
			'en-us': "Once during your turn, if this Pokémon is on your Bench, you may use this Ability. Attach an Energy card from your hand to your Active Larry's Pokémon.",
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez utiliser ce talent. Attachez une carte Énergie de votre main à votre Pokémon d'Okuba Actif.",
			'es-es': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes usar esta habilidad. Une 1 carta de Energía de tu mano a tu Pokémon de Laureano Activo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes usar esta Habilidad. Une 1 carta de Energía de tu mano a tu Pokémon de Laureano Activo.",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Bank ist, kannst du diese Fähigkeit einsetzen. Lege 1 Energiekarte aus deiner Hand an dein Aktives Aokis Pokémon an.",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi usare questa abilità. Assegna al tuo Pokémon di Ubaldo attivo una carta Energia dalla tua mano.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá usar esta Habilidade. Ligue uma carta de Energia da sua mão ao seu Pokémon do Lauro Ativo."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dozing Draw",
			'fr-fr': "Pioche Ensommeillée",
			'es-es': "Robo y Siestita",
			'es-mx': "Robo Adormilado",
			'de-de': "Schlummerzug",
			'it-it': "Pesca Sonnecchiante",
			'pt-br': "Cochila e Compra"
		},

		effect: {
			'en-us': "This Pokémon is now Asleep. Draw 2 cards.",
			'fr-fr': "Ce Pokémon est maintenant Endormi. Piochez 2 cartes.",
			'es-es': "Este Pokémon pasa a estar Dormido. Roba 2 cartas.",
			'es-mx': "Este Pokémon ahora está Dormido. Roba 2 cartas.",
			'de-de': "Dieses Pokémon schläft jetzt. Ziehe 2 Karten.",
			'it-it': "Questo Pokémon viene addormentato. Pesca due carte.",
			'pt-br': "Este Pokémon agora está Adormecido. Compre 2 cartas."
		}
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	description: {
		'en-us': "A potent anesthetic can be made by diluting Komala’s drool. This anesthetic was used for surgeries in the past.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 870407,
			tcgplayer: 675987
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870408,
			tcgplayer: 676988
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870408,
			tcgplayer: 677128
		}
	},
	{
		type: "holo",
		foil: "cosmos",
		thirdParty: {
			cardmarket: 870107,
			tcgplayer: 679249
		}
	},
],
}

export default card
