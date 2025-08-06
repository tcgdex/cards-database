import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Supereffective Glasses",
		fr: "Lunettes Super Efficaces",
		es: "Gafas Supereficaces",
		it: "Occhiali Superefficaci",
		pt: "Óculos Supereficazes",
		de: "Sehr effektive Brille"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "When applying Weakness to damage from the attacks of the Pokémon this card is attached to done to your opponent's Active Pokémon, apply it as ×3.",
		fr: "Lorsque vous appliquez la Faiblesse aux dégâts des attaques infligés au Pokémon Actif de votre adversaire par le Pokémon auquel cette carte est attachée, multipliez-la par 3.",
		es: "Cuando se aplique Debilidad al daño infligido al Pokémon Activo de tu rival por los ataques del Pokémon al que esté unida esta carta, se aplica la Debilidad ×3.",
		it: "Quando applichi la debolezza ai danni inflitti al Pokémon attivo del tuo avversario dagli attacchi del Pokémon a cui è assegnata questa carta, applicala come ×3.",
		pt: "Quando aplicar Fraqueza ao dano de ataques do Pokémon ao qual esta carta está ligada causados ao Pokémon Ativo do seu oponente, aplique-a como ×3.",
		de: "Wenn Schwäche mit Schaden, der dem Aktiven Pokémon deines Gegners durch Attacken des Pokémon, an das diese Karte angelegt ist, verrechnet wird, verrechne sie als ×3."
	},

	trainerType: "Tool",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658813,
		tcgplayer: 272404
	}
}

export default card