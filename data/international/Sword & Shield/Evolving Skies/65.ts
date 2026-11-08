import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Espeon VMAX",
		'fr-fr': "Mentali VMAX",
		'es-es': "Espeon VMAX",
		'it-it': "Espeon VMAX",
		'pt-br': "Espeon VMAX",
		'de-de': "Psiana VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solar Revelation",
			'fr-fr': "Révélation Solaire",
			'es-es': "Revelación Solar",
			'it-it': "Rivelasole",
			'pt-br': "Solar Revelation",
			'de-de': "Solarschild"
		},

		effect: {
			'en-us': "Prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets d'attaques infligés par les Pokémon de votre adversaire à tous vos Pokémon auxquels de l'Énergie est attachée. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			'es-es': "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a cada uno de tus Pokémon que tenga alguna Energía unida a él. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			'it-it': "Previeni tutti gli effetti degli attacchi dei Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
			'pt-br': "Prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)",
			'de-de': "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		name: {
			'en-us': "Max Mindstorm",
			'fr-fr': "Psychomax",
			'es-es': "Maxionda",
			'it-it': "Dynapsiche",
			'pt-br': "Max Mindstorm",
			'de-de': "Dyna-Kinese"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 60 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Espeon V",
		'fr-fr': "Mentali-V",
		'es-es': "Espeon V",
		'it-it': "Espeon-V",
		'pt-br': "Espeon V",
		'de-de': "Psiana-V"
	},

	dexId: [196],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574113,
				tcgplayer: 246690
			}
		},
	],
}

export default card
