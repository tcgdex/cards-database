import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Espeon VMAX",
		fr: "Mentali VMAX",
		es: "Espeon VMAX",
		it: "Espeon VMAX",
		pt: "Espeon VMAX",
		de: "Psiana VMAX"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solar Revelation",
			fr: "Révélation Solaire",
			es: "Revelación Solar",
			it: "Rivelasole",
			pt: "Solar Revelation",
			de: "Solarschild"
		},

		effect: {
			en: "Prevent all effects of attacks from your opponent’s Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)",
			fr: "Évitez tous les effets d’attaques infligés par les Pokémon de votre adversaire à tous vos Pokémon auxquels de l’Énergie est attachée. (Les effets déjà en action ne sont pas retirés. Les dégâts ne sont pas un effet.)",
			es: "Evita todos los efectos de los ataques de los Pokémon de tu rival infligidos a cada uno de tus Pokémon que tenga alguna Energía unida a él. (No se eliminan los efectos ya existentes. El daño no es un efecto).",
			it: "Previeni tutti gli effetti degli attacchi dei Pokémon del tuo avversario inflitti ai tuoi Pokémon che hanno Energie assegnate. Gli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
			pt: "Prevent all effects of attacks from your opponent’s Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)",
			de: "Verhindere alle Effekte von Attacken der Pokémon deines Gegners, die allen deinen Pokémon zugefügt werden, an die Energie angelegt ist. (Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)"
		}
	}],

	attacks: [{
		name: {
			en: "Max Mindstorm",
			fr: "Psychomax",
			es: "Maxionda",
			it: "Dynapsiche",
			pt: "Max Mindstorm",
			de: "Dyna-Kinese"
		},

		effect: {
			en: "This attack does 60 damage for each Energy attached to all of your opponent’s Pokémon.",
			fr: "Cette attaque inflige 60 dégâts pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			es: "Este ataque hace 60 puntos de daño por cada Energía unida a todos los Pokémon de tu rival.",
			it: "Questo attacco infligge 60 danni per ogni Energia assegnata ai Pokémon del tuo avversario.",
			pt: "This attack does 60 damage for each Energy attached to all of your opponent’s Pokémon.",
			de: "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 60 Schadenspunkte zu."
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
		en: "Espeon V",
		fr: "Mentali-V",
		es: "Espeon V",
		it: "Espeon-V",
		pt: "Espeon V",
		de: "Psiana-V"
	},

	dexId: [196],
	suffix: "V"
}

export default card