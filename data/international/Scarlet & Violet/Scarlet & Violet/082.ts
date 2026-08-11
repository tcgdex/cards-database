import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [96],
	set: Set,

	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Forced Sleep",
			'fr-fr': "Sommeil Forcé",
			'es-es': "Sueño Obligado",
			'it-it': "Sonno Forzato",
			'pt-br': "Dormir à Força",
			'de-de': "Ungewollter Schlummer"
		},

		effect: {
			'en-us': "Your opponent chooses 1 of their Benched Pokémon and switches it with their Active Pokémon. The new Active Pokémon is now Asleep.",
			'fr-fr': "Votre adversaire choisit l'un de ses Pokémon de Banc et l'échange contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Endormi.",
			'es-es': "Tu rival elige 1 de sus Pokémon en Banca y lo cambia por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Dormido.",
			'it-it': "Il tuo avversario sceglie uno dei suoi Pokémon in panchina e lo scambia con il suo Pokémon attivo. Il nuovo Pokémon attivo viene addormentato.",
			'pt-br': "Seu oponente escolhe 1 dos Pokémon no Banco dele e troca-o pelo Pokémon Ativo dele. O novo Pokémon Ativo agora está Adormecido.",
			'de-de': "Dein Gegner wählt 1 Pokémon auf seiner Bank und tauscht es gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon schläft jetzt."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
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

	illustrator: "OKACHEKE",

	description: {
		'en-us': "When it twitches its nose, it can tell where someone is sleeping and what that person is dreaming about.",
	},

	thirdParty: {
        cardmarket: 702378,
        tcgplayer: 487944
    }
}

export default card