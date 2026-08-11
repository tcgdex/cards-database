import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Ariados",
		'fr-fr': "Migalos",
		'es-es': "Ariados",
		'it-it': "Ariados",
		'pt-br': "Ariados",
		'de-de': "Ariados"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		168,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trapping Thread",
				'fr-fr': "Fil à Piège",
				'es-es': "Hilo Trampa",
				'it-it': "Tessitrappola",
				'pt-br': "Armadilha de Fios",
				'de-de': "Fangfaden"
			},
			effect: {
				'en-us': "Whenever your opponent plays an Item or Supporter card from their hand during their next turn, prevent all effects of that card done to the Defending Pokémon.",
				'fr-fr': "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main pendant son prochain tour, évitez tous les effets de cette carte sur le Pokémon Défenseur.",
				'es-es': "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano durante su próximo turno, evita todos los efectos de esa carta infligidos al Pokémon Defensor.",
				'it-it': "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano durante il suo prossimo turno, previeni tutti gli effetti di quella carta sul Pokémon difensore.",
				'pt-br': "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão durante a próxima vez dele(a) jogar, prevenirá todos os efeitos daquela carta causados ao Pokémon Defensor.",
				'de-de': "Verhindere jedes Mal, wenn dein Gegner während seines nächsten Zuges eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die dem Verteidigenden Pokémon zugefügt werden."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'fr-fr': "Direct Toxik",
				'es-es': "Puya Nociva",
				'it-it': "Velenpuntura",
				'pt-br': "Golpe Envenenado",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It spins thread from both its rear and its mouth. Then it wraps its prey up in thread and sips their bodily fluids at its leisure.",
	},

	thirdParty: {
		cardmarket: 365606,
		tcgplayer: 178807
	}
}

export default card
