import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		es: "Shedinja",
		it: "Shedinja",
		pt: "Shedinja",
		de: "Ninjatom"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		292,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Vessel of Life",
				fr: "Vaisseau Vital",
				es: "Vasija de Vida",
				it: "Vascello di Vita",
				pt: "Recipiente de Vida",
				de: "Lebensader"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as a Pokémon Tool card. When the Pokémon this card is attached to is Knocked Out, your opponent takes 1 fewer Prize card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser toutes les cartes attachées à ce Pokémon et l’attacher à l’un de vos Pokémon comme carte Outil Pokémon. Lorsque le Pokémon auquel cette carte est attachée est mis K.O., votre adversaire récupère une carte Récompense de moins.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar todas las cartas unidas a este Pokémon y unirlo a 1 de tus Pokémon como una carta de Herramienta Pokémon. Cuando el Pokémon al que esté unida esta carta quede Fuera de Combate, tu rival coge 1 carta de Premio menos.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare tutte le carte assegnate a questo Pokémon e assegnarlo a uno dei tuoi Pokémon come carta Oggetto Pokémon. Quando il Pokémon a cui è assegnata questa carta viene messo KO, il tuo avversario prende una carta Premio in meno.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar todas as cartas ligadas a este Pokémon e ligá-lo a 1 dos seus Pokémon como uma carta de Ferramenta Pokémon. Quando o Pokémon ao qual esta carta está ligada for Nocauteado, seu oponente pega 1 carta de Prêmio a menos.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du alle an dieses Pokémon angelegten Karten auf deinen Ablagestapel legen und es an 1 deiner Pokémon als Pokémon-Ausrüstung anlegen. Wenn das Pokémon, an das diese Karte angelegt ist, kampfunfähig wird, nimmt dein Gegner 1 Preiskarte weniger."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
				es: "Espanto",
				it: "Infestare",
				pt: "Assombrar",
				de: "Spuk"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
				es: "Pon 3 contadores de daño en el Pokémon Activo de tu rival.",
				it: "Metti tre segnalini danno sul Pokémon attivo del tuo avversario.",
				pt: "Coloque 3 contadores de dano no Pokémon Ativo do seu oponente.",
				de: "Lege 3 Schadensmarken auf das Aktive Pokémon deines Gegners."
			},

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365732,
		tcgplayer: 178906
	}
}

export default card
