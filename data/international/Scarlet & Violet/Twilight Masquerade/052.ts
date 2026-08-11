import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [362],
	set: Set,

	name: {
		'en-us': "Glalie",
		'fr-fr': "Oniglali",
		'es-es': "Glalie",
		'it-it': "Glalie",
		'pt-br': "Glalie",
		'de-de': "Firnontor"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Damage Beat",
			'fr-fr': "Rouste Ravageuse",
			'es-es': "Toque Dañino",
			'it-it': "Battidanni",
			'pt-br': "Pancada Destruidora",
			'de-de': "Heftige Prügel"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu."
		},

		damage: "20×"
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Crazy Headbutt",
			'fr-fr': "Coup d'Boule Fou",
			'es-es': "Cabezazo Alocado",
			'it-it': "Bottintesta Folle",
			'pt-br': "Cabeçada Louca",
			'de-de': "Irre Kopfnuss"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon.",
			'it-it': "Scarta un'Energia da questo Pokémon.",
			'pt-br': "Descarte uma Energia deste Pokémon.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It prevents prey from escaping by instantaneously freezing moisture in the air.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769226,
				tcgplayer: 550096
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769226,
				tcgplayer: 550096
			}
		},
	],

	illustrator: "Oku",

}

export default card