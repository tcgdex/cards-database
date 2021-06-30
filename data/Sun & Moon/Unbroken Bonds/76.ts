import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew",
		es: "Mew",
		it: "Mew",
		pt: "Mew",
		de: "Mew"
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bench Barrier",
				fr: "Barrière de Banc",
				es: "Barrera Banca",
				it: "Panchinafranca",
				pt: "Barreira de Banco",
				de: "Bankbarriere"
			},
			effect: {
				en: "Prevent all damage done to your Benched Pokémon by your opponent’s attacks.",
				fr: "Évitez tous les dégâts infligés à vos Pokémon de Banc par les attaques de votre adversaire.",
				es: "Evita todo el daño infligido a tus Pokémon en Banca por ataques de tu rival.",
				it: "Previeni tutti i danni inflitti ai tuoi Pokémon in panchina dagli attacchi del tuo avversario.",
				pt: "Previne todo o dano causado aos seus Pokémon no Banco pelos ataques do seu oponente.",
				de: "Verhindere allen Schaden, der den Pokémon auf deiner Bank durch Attacken deines Gegners zugefügt wird."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psypower",
				fr: "Puissance Psy",
				es: "Psicopoder",
				it: "Psicotere",
				pt: "Poder Psíquico",
				de: "Psy-Power"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Pon 3 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Distribuisci a piacimento tre segnalini danno sui Pokémon del tuo avversario.",
				pt: "Coloque 3 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Lege 3 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
