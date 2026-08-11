import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [968],
	set: Set,

	name: {
		'fr-fr': "Ferdeter",
		'en-us': "Orthworm",
		'es-es': "Orthworm",
		'it-it': "Orthworm",
		'pt-br': "Orthworm",
		'de-de': "Schlurm"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Fer Nutritif",
			'en-us': "Nutritional Iron",
			'es-es': "Hierro Nutritivo",
			'it-it': "Ferro Nutrizionale",
			'pt-br': "Ferro Nutritivo",
			'de-de': "Nahrhaftes Eisen"
		},

		effect: {
			'fr-fr': "Si au moins 3 Énergies {M} sont attachées à ce Pokémon, il reçoit +100 PV.",
			'en-us': "If this Pokémon has 3 or more {M} Energy attached, it gets +100 HP.",
			'es-es': "Si este Pokémon tiene 3 Energías {M} o más unidas, obtiene 100 PS más.",
			'it-it': "Se questo Pokémon ha tre o più Energie {M} assegnate, ha 100 PS in più.",
			'pt-br': "Se este Pokémon tiver 3 ou mais Energias {M} ligadas a ele, receberá 100 PS a mais.",
			'de-de': "Wenn an dieses Pokémon 3 oder mehr {M}-Energien angelegt sind, erhält es +100 KP."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Passer à Travers",
			'en-us': "Shoot Through",
			'es-es': "Cruzar Rápido",
			'it-it': "Sparainmezzo",
			'pt-br': "Tiro Vazante",
			'de-de': "Durchschießen"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715626,
				tcgplayer: 497569,
				cardtrader: 248806
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 754781
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715626,
				tcgplayer: 497569,
				cardtrader: 248806
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	description: {
		'en-us': "When attacked, this Pokémon will wield the tendrils on its body like fists and pelt the opponent with a storm of punches.",
	},
}

export default card
