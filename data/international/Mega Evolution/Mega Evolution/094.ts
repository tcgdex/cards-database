import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Mawile ex",
		'fr-fr': "Méga-Mysdibule-ex",
		'de-de': "Mega-Flunkifer-ex",
		'it-it': "Mega Mawile-ex",
		'es-es': "Mega-Mawile ex",
		'pt-br': "Mega Mawile ex",
		'es-mx': "Mega-Mawile ex"
	},

	suffix: "ex",
	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "Basic",
	dexId: [303],

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Gobble Down",
			'fr-fr': "Gobage",
			'de-de': "Vertilgen",
			'it-it': "Abbuffata",
			'es-es': "Ingesta Voraz",
			'pt-br': "Engolidona",
			'es-mx': "Ingesta Voraz"
		},

		effect: {
			'en-us': "This attack does 80 damage for each Prize card you have taken.",
			'fr-fr': "Cette attaque inflige 80 dégâts pour chaque carte Récompense que vous avez récupérée.",
			'de-de': "Diese Attacke fügt für jede von dir genommene Preiskarte 80 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 80 danni per ogni carta Premio che hai preso.",
			'es-es': "Este ataque hace 80 puntos de daño por cada carta de Premio que hayas cogido.",
			'pt-br': "Este ataque causa 80 pontos de dano para cada carta de Prêmio que você pegou.",
			'es-mx': "Este ataque hace 80 puntos de daño por cada carta de Premio que hayas tomado."
		},

		damage: "80×"
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'en-us': "Huge Bite",
			'fr-fr': "Morsure Immense",
			'de-de': "Gewaltiger Biss",
			'it-it': "Macromorso",
			'es-es': "Mordisco Gigante",
			'pt-br': "Dentadona",
			'es-mx': "Enorme Mordida"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack's base damage is 30.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, les dégâts de base de cette attaque sont de 30.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, beträgt der Grundschaden dieser Attacke 30 Schadenspunkte.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, i danni base di questo attacco sono 30.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, el daño básico de este ataque es de 30 puntos de daño.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, o dano base deste ataque será 30.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, el daño base de este ataque es de 30 puntos de daño."
		},

		damage: 260
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
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851165,
				tcgplayer: 654433
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
		}
	],
}

export default card
