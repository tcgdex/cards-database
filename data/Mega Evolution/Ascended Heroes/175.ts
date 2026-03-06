import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [775],

	name: {
		en: "Larry's Komala",
		fr: "Dodoala d'Okuba",
		es: "Komala de Laureano",
		'es-mx': "Komala de Laureano",
		de: "Aokis Koalelu",
		it: "Komala di Ubaldo",
		pt: "Komala do Lauro"
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
			en: "Lethargic Charge",
			fr: "Charge Léthargique",
			es: "Carga Letárgica",
			'es-mx': "Carga Letárgica",
			de: "Lethargischer Aufbau",
			it: "Carica Letargica",
			pt: "Carga Letárgica"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may use this Ability. Attach an Energy card from your hand to your Active Larry's Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur votre Banc, vous pouvez utiliser ce talent. Attachez une carte Énergie de votre main à votre Pokémon d'Okuba Actif.",
			es: "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes usar esta habilidad. Une 1 carta de Energía de tu mano a tu Pokémon de Laureano Activo.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en tu Banca, puedes usar esta Habilidad. Une 1 carta de Energía de tu mano a tu Pokémon de Laureano Activo.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon auf deiner Bank ist, kannst du diese Fähigkeit einsetzen. Lege 1 Energiekarte aus deiner Hand an dein Aktives Aokis Pokémon an.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è nella tua panchina, puoi usare questa abilità. Assegna al tuo Pokémon di Ubaldo attivo una carta Energia dalla tua mano.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no seu Banco, você poderá usar esta Habilidade. Ligue uma carta de Energia da sua mão ao seu Pokémon do Lauro Ativo."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Dozing Draw",
			fr: "Pioche Ensommeillée",
			es: "Robo y Siestita",
			'es-mx': "Robo Adormilado",
			de: "Schlummerzug",
			it: "Pesca Sonnecchiante",
			pt: "Cochila e Compra"
		},

		effect: {
			en: "This Pokémon is now Asleep. Draw 2 cards.",
			fr: "Ce Pokémon est maintenant Endormi. Piochez 2 cartes.",
			es: "Este Pokémon pasa a estar Dormido. Roba 2 cartas.",
			'es-mx': "Este Pokémon ahora está Dormido. Roba 2 cartas.",
			de: "Dieses Pokémon schläft jetzt. Ziehe 2 Karten.",
			it: "Questo Pokémon viene addormentato. Pesca due carte.",
			pt: "Este Pokémon agora está Adormecido. Compre 2 cartas."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 675987,
		cardmarket: 869786
	}
}

export default card