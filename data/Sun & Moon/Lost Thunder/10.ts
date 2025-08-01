import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
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
		en: "Spinarak",
		fr: "Mimigal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trapping Thread",
				fr: "Fil à Piège",
				es: "Hilo Trampa",
				it: "Tessitrappola",
				pt: "Armadilha de Fios",
				de: "Fangfaden"
			},
			effect: {
				en: "Whenever your opponent plays an Item or Supporter card from their hand during their next turn, prevent all effects of that card done to the Defending Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Objet ou une carte Supporter de sa main pendant son prochain tour, évitez tous les effets de cette carte sur le Pokémon Défenseur.",
				es: "Cada vez que tu rival juegue 1 carta de Objeto o de Partidario de su mano durante su próximo turno, evita todos los efectos de esa carta infligidos al Pokémon Defensor.",
				it: "Ogni volta che il tuo avversario gioca una carta Strumento o Aiuto che ha in mano durante il suo prossimo turno, previeni tutti gli effetti di quella carta sul Pokémon difensore.",
				pt: "Sempre que seu oponente jogar 1 carta de Item ou de Apoiador da própria mão durante a próxima vez dele(a) jogar, prevenirá todos os efeitos daquela carta causados ao Pokémon Defensor.",
				de: "Verhindere jedes Mal, wenn dein Gegner während seines nächsten Zuges eine Item- oder Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die dem Verteidigenden Pokémon zugefügt werden."
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
				en: "Poison Jab",
				fr: "Direct Toxik",
				es: "Puya Nociva",
				it: "Velenpuntura",
				pt: "Golpe Envenenado",
				de: "Gifthieb"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
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

	thirdParty: {
		cardmarket: 365606
	}
}

export default card
