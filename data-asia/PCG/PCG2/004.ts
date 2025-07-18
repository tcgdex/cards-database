import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Weezing",
         ja: "おしっこ",
         fr: "Faire de la pointe",
         de: "Weezing",
         es: "Weezing",
         it: "Weezing",
         pt: "Weezing",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [110],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Liability",
            ja: "責任",
            fr: "Responsabilité",
            de: "Haftung",
            es: "Responsabilidad",
            it: "Responsabilità",
            pt: "Responsabilidade",
          },
          effect: {
            en: "Put damage counters on the Defending Pokemon until it is 10 HP away from being Knocked Out. Weezing does 70 damage to itself.",
            ja: "ダメージカウンターは、ノックアウトされることから10馬力になるまで防御ポケモンに置きます。 Weezingはそれ自体に70のダメージを与えます。",
            fr: "Mettez les compteurs de dégâts sur le Pokémon en défense jusqu'à ce qu'il soit à 10 HP de l'assurance. Weezing fait 70 dégâts à lui-même.",
            de: "Setzen Sie Schadenszähler auf das verteidigende Pokémon, bis es 10 HP vom Ausschalten entfernt ist. Weezing schädigt sich 70.",
            es: "Ponga los contadores de daño en el Pokémon defensor hasta que esté a 10 hp de ser noqueado. Weezing hace 70 daños a sí mismo.",
            it: "Metti i contatori di danno sul Pokemon in carica fino a quando non è a 10 CV dall'essere eliminato. Weezing fa 70 danni a se stesso.",
            pt: "Coloque os contadores de danos no Pokémon atual até que ele esteja a 10 hp de ser nocauteado. Weezing causa 70 danos a si mesmo.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Smogscreen",
            ja: "スモッグスクリーン",
            fr: "Smogscreen",
            de: "Smogscreen",
            es: "Smogsen",
            it: "Smogscreen",
            pt: "Smogscreen",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned. If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
            ja: "防御ポケモンは現在中毒になっています。防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
            fr: "Le Pokémon en défense est maintenant empoisonné. Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet. Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "El Pokémon defensor ahora está envenenado. Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada.",
            it: "Il Pokemon in carica è ora avvelenato. Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla.",
            pt: "O Pokémon atual agora está envenenado. Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
