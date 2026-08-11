import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		'en-us': "Lechonk",
		'fr-fr': "Gourmelet",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Repelling Odor",
			'fr-fr': "Odeur Repoussante",
			'es-es': "Olor Repelente",
			'it-it': "Odore Repellente",
			'pt-br': "Odor Repelente",
			'de-de': "Abstoßender Gestank"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Teeziro",

	description: {
		'en-us': "It searches for food all day. It possesses a keen sense of smell but doesn't use it for anything other than foraging.",
	},

	thirdParty: {
        cardmarket: 702450,
        tcgplayer: 488048
    }
}

export default card
