import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Bombirdier",
		fr: "Lestombaile",
		es: "Bombirdier",
		de: "Adebom",
		it: "Bombirdier",
		pt: "Bombirdier",
		'es-mx': "Bombirdier"
  },
  illustrator: "nagimiso",
  rarity: "Three Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Darkness"],
  dexId: [962],
  description: {
    en: "Bombirdier uses the apron on its chest to bundle up food, which it carries back to its nest. It enjoys dropping things that make loud noises.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
				en: "Fly",
				fr: "Vol",
				es: "Vuelo",
				it: "Volo",
				pt: "Voar",
				de: "Fliegen"
      },
      damage: "70",
      cost: ["Colorless", "Colorless", "Colorless"],
      effect: {
        fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
        en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon.",
        es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, durante el próximo turno de tu rival, se evitan todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
        it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
        pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
        de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden."
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
