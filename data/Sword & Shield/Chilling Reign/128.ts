import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou",
		es: "Greedent",
		it: "Greedent",
		pt: "Greedent",
		de: "Schlaraffel"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand",
		es: "Skwovet",
		it: "Skwovet",
		pt: "Skwovet",
		de: "Raffel"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Brazen Tail",
			fr: "Queue Effrontée",
			es: "Cola Descarada",
			it: "Coda Sfacciata",
			pt: "Cauda Insolente",
			de: "Dreister Schweif"
		},

		effect: {
			en: "Energy attached to your Pokémon can't be put into your hand, deck, or discard pile by an effect of your opponent's Item or Supporter cards.",
			fr: "L'Énergie attachée à vos Pokémon ne peut pas être placée dans votre main, deck ou pile de défausse par les effets des cartes Objet ou Supporter de votre adversaire.",
			es: "Las Energías unidas a tus Pokémon no pueden ponerse en tu mano, baraja o pila de descartes por ningún efecto de las cartas de Objeto o de Partidario de tu rival.",
			it: "Nessuna Energia assegnata ai tuoi Pokémon può essere aggiunta alla tua mano, al tuo mazzo o alla tua pila degli scarti per effetto delle carte Strumento o carte Aiuto del tuo avversario.",
			pt: "Energias ligadas aos seus Pokémon não podem ser colocadas na sua mão, baralho ou pilha de descarte pelos efeitos de cartas de Item ou Apoiador do seu oponente.",
			de: "An deine Pokémon angelegte Energien können nicht durch einen Effekt von Item- oder Unterstützerkarten deines Gegners auf deine Hand gegeben, in dein Deck oder auf deinen Ablagestapel gelegt werden."
		}
	}],

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells."
	},

	thirdParty: {
		cardmarket: 567236,
		tcgplayer: 241810
	}
}

export default card
