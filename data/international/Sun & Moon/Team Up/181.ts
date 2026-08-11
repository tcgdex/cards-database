import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Sabrina’s Suggestion",
		'fr-fr': "Suggestion de Morgane",
		'es-es': "Propuesta de Sabrina",
		'it-it': "Suggerimento di Sabrina",
		'pt-br': "Sugestão da Sabrina",
		'de-de': "Sabrinas Vorschlag"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Votre adversaire dévoile sa main. Vous pouvez choisir une carte Supporter que vous y trouvez et utiliser son effet en tant qu’effet de cette carte.",
		'en-us': "Your opponent reveals their hand. You may choose a Supporter card you find there and use the effect of that card as the effect of this card.",
		'es-es': "Tu rival enseña las cartas de su mano. Puedes elegir 1 carta de Partidario que encuentres entre ellas y usar el efecto de esa carta como efecto de este ataque.",
		'it-it': "Il tuo avversario mostra le carte che ha in mano. Puoi scegliere una carta Aiuto presente tra esse e usare l’effetto di quella carta come effetto di questa carta.",
		'pt-br': "Seu oponente revela a própria mão. Você pode escolher 1 carta de Apoiador que encontrar lá e usar o efeito daquela carta como o efeito desta carta.",
		'de-de': "Dein Gegner zeigt dir seine Handkarten. Du kannst 1 Unterstützerkarte, die du dort findest, wählen und den Effekt jener Karte als Effekt dieser Karte einsetzen."
	},
	trainerType: "Supporter",

}

export default card
