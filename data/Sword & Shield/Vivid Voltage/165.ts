import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Wash Water Energy",
		fr: "Énergie Water Lavage",
		es: "Energía Water Lavado",
		it: "Energia Water Lavaggio",
		pt: "Energia Water Banhada",
		de: "Wasch-Water-Energie"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		en: "As long as this card is attached to a Pokémon, it provides Water Energy.\n\nPrevent all effects of attacks from your opponent's Pokémon done to the Water Pokémon this card is attached to. (Existing effects are not removed. Damage is not an effect.)",
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Water.\n\nÉvitez tous les effets d'attaques infligés au Pokémon Water, auquel cette carte est attachée, par les Pokémon de votre adversaire. (Les effets déjà en action ne sont pas retirés.Les dégâts ne sont pas un effet.)",
		es: "Mientras esta carta esté unida a 1 Pokémon, proporciona 1 Energía Water.\n\nEvita todos los efectos de los ataques de los Pokémon de tu rival al Pokémon Water al que esté unida esta carta.\n(No se eliminan los efectos ya existentes. El daño no es un efecto).",
		it: "Fintanto che questa carta è assegnata a un Pokémon, fornisce Energia Water.\n\nPrevieni tutti gli effetti degli attacchi inflitti al Pokémon Water a cui è assegnata questa carta dai Pokémon del tuo avversario.\nGli effetti esistenti non vengono rimossi. I danni non sono un effetto.",
		pt: "Enquanto esta carta estiver ligada a um Pokémon, ela fornecerá Energia Water.\n\nPrevina todos os efeitos de ataques dos Pokémon do seu oponente causados ao Pokémon Water ao qual esta carta está ligada\n(efeitos existentes não são removidos e dano não é um efeito).",
		de: "Solange diese Karte an ein Pokémon angelegt ist, liefert sie Water-Energie.\n\nVerhindere alle Effekte von Attacken der Pokémon deines Gegners, die dem Water-Pokémon, an das diese Karte angelegt ist, zugefügt werden.\n(Bestehende Effekte werden nicht entfernt. Schaden ist kein Effekt.)"
	},

	energyType: "Special",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
