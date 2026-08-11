import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		'fr-fr': "Terracruel-ex",
		'en-us': "Toedscruel ex",
		'es-es': "Toedscruel ex",
		'it-it': "Toedscruel-ex",
		'pt-br': "Toedscruel ex",
		'de-de': "Tenterra-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Terracool",
		'en-us': "Toedscool",
		'es-es': "Toedscool",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'de-de': "Tentagra"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Protection Fongique",
			'en-us': "Protective Mycelium",
			'es-es': "Micelio Protector",
			'it-it': "Micoprotezione",
			'pt-br': "Micélio Protetor",
			'de-de': "Schützendes Myzelium"
		},

		effect: {
			'fr-fr': "Évitez tous les effets infligés à tous vos Pokémon auxquels de l'Énergie est attachée et provenant des attaques utilisées par les Pokémon de votre adversaire. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			'en-us': "Prevent all effects of attacks used by your opponent's Pokémon done to all of your Pokémon that have Energy attached. (Existing effects are not removed. Damage is not an effect.)",
			'es-es': "Se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a cada uno de tus Pokémon que tenga alguna Energía unida. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			'it-it': "Previeni tutti gli effetti degli attacchi usati dai Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
			'pt-br': "Previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a todos os seus Pokémon que têm Energia ligada a eles. (Efeitos existentes não são removidos e dano não é um efeito.)",
			'de-de': "Verhindere alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Ruée Collective",
			'en-us': "Colony Rush",
			'es-es': "Colonia al Ataque",
			'it-it': "Assalto della Colonia",
			'pt-br': "Colônia Furiosa",
			'de-de': "Kolonieansturm"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chacun de vos Pokémon de Banc auxquels au moins une Énergie {G} est attachée.",
			'en-us': "This attack does 40 more damage for each of your Benched Pokémon that has any {G} Energy attached.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada uno de tus Pokémon en Banca que tenga alguna Energía {G} unida.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Pokémon nella tua panchina che ha delle Energie {G} assegnate.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada um dos seus Pokémon no Banco que tem alguma Energia {G} ligada a ele.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, an das mindestens 1 {G}-Energie angelegt ist, 40 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725102,
				tcgplayer: 509767,
				cardtrader: 255582
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
