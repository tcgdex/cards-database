import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
		es: "Rotom",
		it: "Rotom",
		pt: "Rotom",
		de: "Rotom"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		479,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roto Motor",
				fr: "Moti-Moteur",
				es: "Motor Rotom",
				it: "Rotomotore",
				pt: "Rotom Motor",
				de: "Roto-Motor"
			},
			effect: {
				en: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon’s attacks.",
				fr: "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
				es: "Si tienes 9 o más cartas de Herramienta Pokémon en tu pila de descartes, ignora todas las Energías en el coste de los ataques de este Pokémon.",
				it: "Se hai nove o più carte Oggetto Pokémon nella tua pila degli scarti, ignora tutte le Energie necessarie per usare ciascuno degli attacchi di questo Pokémon.",
				pt: "Se você tiver 9 ou mais cartas de Ferramenta Pokémon na sua pilha de descarte, ignore todas as Energias no custo do ataque de cada ataque deste Pokémon.",
				de: "Wenn du 9 Pokémon-Ausrüstungen oder mehr in deinem Ablagestapel hast, ignoriere alle Energien in den Attackenkosten jeder Attacke dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Plasma Slice",
				fr: "Tranche Plasma",
				es: "Tajo Plasma",
				it: "Sferzata di Plasma",
				pt: "Fatia de Plasma",
				de: "Plasmaschnitt"
			},
			effect: {
				en: "This Pokémon can’t attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				es: "Este Pokémon no puede atacar durante tu próximo turno.",
				it: "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				pt: "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 315980
	}
}

export default card
