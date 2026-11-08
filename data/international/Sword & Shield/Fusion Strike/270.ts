import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [196],
	set: Set,

	name: {
		'en-us': "Espeon VMAX",
		'fr-fr': "Mentali VMAX",
		'es-es': "Espeon VMAX",
		'it-it': "Espeon VMAX",
		'pt-br': "Espeon VMAX",
		'de-de': "Psiana VMAX"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Espeon V",
		'fr-fr': "Mentali-V",
		'es-es': "Espeon V",
		'it-it': "Espeon-V",
		'pt-br': "Espeon V",
		'de-de': "Psiana-V"
	},

	stage: "VMAX",
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
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Solar Revelation",
			'fr-fr': "Révélation Solaire",
			'de-de': "Solarschild",
			'es-es': "Revelación Solar",
			'pt-br': "Revelação Solar",
			'it-it': "Rivelasole"
		},

		effect: {
			'en-us': "Prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)",
			'fr-fr': "Évitez tous les effets d'attaques infligés par les Pokémon de votre adversaire à tous vos Pokémon auxquels de l'Énergie est attachée. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			'de-de': "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)",
			'es-es': "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a cada uno de tus Pokémon que tenga alguna Energía unida a él. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			'pt-br': "Previna todos os efeitos de ataques dos Pokémon do seu oponente causados a todos os seus Pokémon que tenham Energia ligada a eles (efeitos existentes não são removidos e dano não é um efeito).",
			'it-it': "Previeni tutti gli effetti degli attacchi dei Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Max Mindstorm",
			'fr-fr': "Psychomax",
			'de-de': "Dyna-Kinese",
			'es-es': "Maxionda",
			'pt-br': "Tempestade Mental Max",
			'it-it': "Dynapsiche"
		},

		damage: "60×",

		effect: {
			'en-us': "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 60 Schadenspunkte zu.",
			'es-es': "Este ataque hace 60 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Energia ligada a todos os Pokémon do seu oponente.",
			'it-it': "Questo attacco infligge 60 danni per ogni Energia assegnata ai Pokémon del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 583020,
				tcgplayer: 253265
			}
		},
	],
}

export default card
