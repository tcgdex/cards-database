import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
		es: "Roserade",
		it: "Roserade",
		pt: "Roserade",
		de: "Roserade"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Inviting Poison",
				fr: "Poison Tentant",
				es: "Veneno Cautivador",
				it: "Veleno Invitante",
				pt: "Veneno Convidativo",
				de: "Einladendes Gift"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Poisoned.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Empoisonné.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Envenenado.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene avvelenato.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Envenenado.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Tornado",
				fr: "Floramixeur",
				es: "Tornado Floral",
				it: "Vortifiore",
				pt: "Tornado de Flores",
				de: "Blumenmixer"
			},
			effect: {
				en: "Move any number of Grass Energy from your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez.",
				es: "Mueve cualquier cantidad de Energías Grass de tus Pokémon a tus otros Pokémon de la manera que desees.",
				it: "Distribuisci a piacimento tutte le Energie Grass assegnate ai tuoi Pokémon.",
				pt: "Mova qualquer número de Energia Grass dos seus Pokémon para outros Pokémon seus como desejar.",
				de: "Verschiebe beliebig viele Grass-Energien von deinen Pokémon beliebig auf deine anderen Pokémon."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
