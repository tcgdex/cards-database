import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [1012],
	set: Set,

	name: {
		'en-us': "Poltchageist",
		'fr-fr': "Poltchageist",
		'es-es': "Poltchageist",
		'it-it': "Poltchageist",
		'pt-br': "Poltchageist",
		'de-de': "Mortcha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Storehouse Hideaway",
			'fr-fr': "Antre Entrepôt",
			'es-es': "Almacén Oculto",
			'it-it': "Deposito Nascosto",
			'pt-br': "Esconderijo no Armazém",
			'de-de': "Lagerversteck"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire.",
			'es-es': "Mientras este Pokémon esté en tu Banca, se evitan todo el daño y todos los efectos de los ataques de los Pokémon de tu rival infligidos a este Pokémon.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, previeni sia i danni che gli effetti degli attacchi dei Pokémon del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, previna todo o dano e os efeitos de ataques dos Pokémon do seu oponente causados a este Pokémon.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verhindere allen Schaden durch und alle Effekte von Attacken von Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Hook",
			'fr-fr': "Crochet",
			'es-es': "Garfio",
			'it-it': "Uncino",
			'pt-br': "Gancho",
			'de-de': "Haken"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Poltchageist looks like a regional form of Sinistea, but it was recently discovered that the two Pokémon are entirely unrelated.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769194,
				tcgplayer: 550064
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769194,
				tcgplayer: 550064
			}
		},
	],

	illustrator: "MINAMINAMI Take",

}

export default card