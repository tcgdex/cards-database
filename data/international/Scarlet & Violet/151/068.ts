import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [68],
	set: Set,

	name: {
		'fr-fr': "Mackogneur",
		'en-us': "Machamp",
		'es-es': "Machamp",
		'it-it': "Machamp",
		'pt-br': "Machamp",
		'de-de': "Machomei"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Machopeur",
		'en-us': "Machoke",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Cran",
			'en-us': "Guts",
			'es-es': "Agallas",
			'it-it': "Dentistretti",
			'pt-br': "Tenacidade",
			'de-de': "Adrenalin"
		},

		effect: {
			'fr-fr': "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. et il lui reste 10 PV.",
			'en-us': "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			'es-es': "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
			'it-it': "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
			'pt-br': "Se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque, jogue uma moeda. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Découpe-Montagnes",
			'en-us': "Mountain Chopping",
			'es-es': "Tajo Montaña",
			'it-it': "Tagliamonte",
			'pt-br': "Fenda Montanhosa",
			'de-de': "Bergspalter"
		},

		effect: {
			'fr-fr': "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			'en-us': "Discard the top 2 cards of your opponent's deck.",
			'es-es': "Descarta las 2 primeras cartas de la baraja de tu rival.",
			'it-it': "Scarta le prime due carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 2 cartas de cima do baralho do seu oponente.",
			'de-de': "Lege die obersten 2 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "With four arms that react more quickly than it can think, it can execute many punches at once.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733663,
				tcgplayer: 516385,
				cardtrader: 261239
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733663,
				tcgplayer: 516385,
				cardtrader: 261239
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 864951
			}
		},
	],

	illustrator: "Ryuta Fuse",

	
}

export default card
