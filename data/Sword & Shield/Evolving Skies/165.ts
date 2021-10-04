import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Treasure Energy",
		fr: "Énergie Trésor",
		es: "Energía Tesoro",
		it: "Energia Tesoro",
		pt: "Energia do Tesouro",
		de: "Schatz-Energie"
	},

	rarity: "Uncommon",
	category: "Energy",

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Colorless Energy.\nIf you took this card as a face-down Prize card during your turn, before you put it into your hand, you may attach this card to 1 of your Pokémon.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Colorless.\nSi vous avez obtenu cette carte en récupérant une carte Récompense face cachée pendant votre tour, plutôt que de l’ajouter à votre main, vous pouvez attacher cette carte à l’un de vos Pokémon.",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Colorless.\nSi has cogido esta carta de entre las cartas de Premio que están boca abajo durante tu turno, antes de ponerla en tu mano, puedes unir esta carta a 1 de tus Pokémon.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Colorless.\nSe hai preso questa carta come carta Premio coperta durante il tuo turno, prima di aggiungerla alle carte che hai in mano, puoi assegnarla a uno dei tuoi Pokémon.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Colorless.\nSe você pegou esta carta como uma carta de Prêmio virada para baixo durante o seu turno, antes de colocá-la na sua mão, você poderá ligar esta carta a 1 dos seus Pokémon.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Colorless-Energie.\nWenn du diese Karte während deines Zuges als verdeckte Preiskarte genommen hast, kannst du diese Karte, bevor du sie auf deine Hand nimmst, an 1 deiner Pokémon anlegen."
	},

	energyType: "Special"
}

export default card