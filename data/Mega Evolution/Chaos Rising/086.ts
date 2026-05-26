import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Nitro Fire Energy",
		fr: "Énergie Fire Nitro",
		es: "Energía Fire Nitro",
		'es-mx': "Energía Fire Nitro",
		de: "Nitro-Fire-Energie",
		it: "Energia Fire Propulsiva",
		pt: "Energia Fire Nitro"
	},

	rarity: "Rare",
	category: "Energy",
	energyType: "Normal",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693527,
		cardmarket: 886478
	},

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides {R} Energy.\n\nIf this card is discarded by an effect of an attack used by the {R} Pokémon this card is attached to, put this card into your hand after attack damage and effects.",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {R}.\n\nSi cette carte est défaussée par l'effet d'une attaque utilisée par le Pokémon {R} auquel cette carte est attachée, ajoutez cette carte à votre main après les dégâts et les effets de l'attaque.",
		es: "Mientras esta carta esté unida a un Pokémon, proporciona 1 Energía {R}.\n\nSi esta carta se descarta por el efecto de un ataque usado por el Pokémon {R} al que esté unida, pon esta carta en tu mano después de aplicar el daño y los efectos del ataque.",
		'es-mx': "Mientras esta carta esté unida a un Pokémon, proporciona Energía {R}.\n\nSi esta carta se descarta por el efecto de un ataque usado por el Pokémon {R} al que esté unida, pon esta carta en tu mano después de infligir el daño y los efectos del ataque.",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie {R}-Energie.\n\nWenn diese Karte durch einen Effekt einer von dem {R}-Pokémon, an das diese Karte angelegt ist, eingesetzten Attacke auf deinen Ablagestapel gelegt wird, nimm diese Karte nach Attackenschaden und Effekten auf deine Hand.",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia {R}.\n\nSe questa carta viene scartata per effetto di un attacco usato dal Pokémon {R} a cui è assegnata, aggiungila alle carte che hai in mano dopo i danni e gli effetti dell'attacco.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia {R}.\n\nSe esta carta for descartada pelo efeito de um ataque usado pelo Pokémon {R} ao qual esta carta está ligada, coloque esta carta na sua mão após o dano e os efeitos do ataque."
	}
}

export default card
