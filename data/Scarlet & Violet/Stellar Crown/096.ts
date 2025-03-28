import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl",
		fr: "Angoliath",
		es: "Grimmsnarl",
		it: "Grimmsnarl",
		pt: "Grimmsnarl",
		de: "Olangaar"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Goad 'n' Grab",
			fr: "Prise Provocatrice",
			es: "Acoso y Derribo",
			it: "Assillarraffa",
			pt: "Chamar na Chincha",
			de: "Köderklatsche"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.) If you do, this attack does 160 damage to the new Active Pokémon.",
			fr: "Envoyez le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.) Dans ce cas, cette attaque inflige 160 dégâts au nouveau Pokémon Actif.",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo). Si lo haces, este ataque hace 160 puntos de daño al nuevo Pokémon Activo.",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo. Se lo fai, questo attacco infligge 160 danni al nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.) Se fizer isto, este ataque causará 160 pontos de dano ao novo Pokémon Ativo.",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.) Wenn du das machst, fügt diese Attacke dem neuen Aktiven Pokémon 160 Schadenspunkte zu."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Knuckle Sandwich",
			fr: "Choc Poing",
			es: "Puño a Bocajarro",
			it: "Schiacciatina",
			pt: "Soco Falso",
			de: "Keile"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	}
}

export default card
