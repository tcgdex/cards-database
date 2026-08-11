import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Supereffective Glasses",
		'fr-fr': "Lunettes Super Efficaces",
		'es-es': "Gafas Supereficaces",
		'it-it': "Occhiali Superefficaci",
		'pt-br': "Óculos Supereficazes",
		'de-de': "Sehr effektive Brille"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "When applying Weakness to damage from the attacks of the Pokémon this card is attached to done to your opponent's Active Pokémon, apply it as ×3.",
		'fr-fr': "Lorsque vous appliquez la Faiblesse aux dégâts des attaques infligés au Pokémon Actif de votre adversaire par le Pokémon auquel cette carte est attachée, multipliez-la par 3.",
		'es-es': "Cuando se aplique Debilidad al daño infligido al Pokémon Activo de tu rival por los ataques del Pokémon al que esté unida esta carta, se aplica la Debilidad ×3.",
		'it-it': "Quando applichi la debolezza ai danni inflitti al Pokémon attivo del tuo avversario dagli attacchi del Pokémon a cui è assegnata questa carta, applicala come ×3.",
		'pt-br': "Quando aplicar Fraqueza ao dano de ataques do Pokémon ao qual esta carta está ligada causados ao Pokémon Ativo do seu oponente, aplique-a como ×3.",
		'de-de': "Wenn Schwäche mit Schaden, der dem Aktiven Pokémon deines Gegners durch Attacken des Pokémon, an das diese Karte angelegt ist, verrechnet wird, verrechne sie als ×3."
	},

	trainerType: "Tool",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658813,
				tcgplayer: 272404
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658813,
				tcgplayer: 272404
			}
		},
	],
}

export default card
