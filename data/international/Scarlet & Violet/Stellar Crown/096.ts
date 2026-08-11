import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [861],
	set: Set,

	name: {
		'en-us': "Grimmsnarl",
		'fr-fr': "Angoliath",
		'es-es': "Grimmsnarl",
		'it-it': "Grimmsnarl",
		'pt-br': "Grimmsnarl",
		'de-de': "Olangaar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Goad 'n' Grab",
			'fr-fr': "Prise Provocatrice",
			'es-es': "Acoso y Derribo",
			'it-it': "Assillarraffa",
			'pt-br': "Chamar na Chincha",
			'de-de': "Köderklatsche"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.) If you do, this attack does 160 damage to the new Active Pokémon.",
			'fr-fr': "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.) Dans ce cas, cette attaque inflige 160 dégâts au nouveau Pokémon Actif.",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo). Si lo haces, este ataque hace 160 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo. Se lo fai, questo attacco infligge 160 danni al nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.) Se fizer isto, este ataque causará 160 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.) Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 160 Schadenspunkte zu."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Knuckle Sandwich",
			'fr-fr': "Choc Poing",
			'es-es': "Puño a Bocajarro",
			'it-it': "Schiacciatina",
			'pt-br': "Soco Falso",
			'de-de': "Keile"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785950,
				tcgplayer: 567322
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785950,
				tcgplayer: 567322
			}
		},
		{
			type: "normal",
			foil: "league",
			thirdParty: {
				cardmarket: 883667,
			}
		},
	],

	illustrator: "Kazumasa Yasukuni",

	thirdParty: {
		cardmarket: 785950
	}
}

export default card
