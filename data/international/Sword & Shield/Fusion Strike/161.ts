import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [862],
	set: Set,

	name: {
		'en-us': "Galarian Obstagoon",
		'fr-fr': "Ixon de Galar",
		'es-es': "Obstagoon de Galar",
		'it-it': "Obstagoon di Galar",
		'pt-br': "Obstagoon de Galar",
		'de-de': "Galar-Barrikadax"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Galarian Linoone",
		'fr-fr': "Linéon de Galar",
		'es-es': "Linoone de Galar",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar",
		'de-de': "Galar-Geradaks"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		'en-us': "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch."
	},

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Silence",
			'fr-fr': "Silence",
			'de-de': "Stummschalten",
			'es-es': "Silenciar",
			'pt-br': "Silenciar",
			'it-it': "Silenzio"
		},

		damage: 30,

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks. During your opponent's next turn, that Pokémon can't use that attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas utiliser cette attaque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners. Während des nächsten Zuges deines Gegners kann jenes Pokémon jene Attacke nicht einsetzen.",
			'es-es': "Elige 1 de los ataques del Pokémon Activo de tu rival. Durante el próximo turno de tu rival, dicho Pokémon no puede usar ese ataque.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente. Durante o próximo turno do seu oponente, aquele Pokémon não poderá usar aquele ataque.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario. Durante il prossimo turno del tuo avversario, quel Pokémon non potrà utilizzarlo."
		}
	}, {
		cost: ["Darkness"],

		name: {
			'en-us': "Merciless Strike",
			'fr-fr': "Impact Impitoyable",
			'de-de': "Gnadenloser Schlag",
			'es-es': "Golpe Despiadado",
			'pt-br': "Golpe Impiedoso",
			'it-it': "Colpo Implacabile"
		},

		damage: "60+",

		effect: {
			'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 90 dégâts supplémentaires.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 90 danni in più."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582789,
				tcgplayer: 253375
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 883765
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582789,
				tcgplayer: 253375
			}
		},
	],
}

export default card
