import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Lanturn",
         ja: "ライトラントン",
         fr: "Light Lanturn",
         de: "Leichter Lanturn",
         es: "Lanturn ligero",
         it: "Lanturn leggera",
         pt: "Lanturn leve",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [171],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Searchlight",
            ja: "サーチライト",
            fr: "Projecteur",
            de: "Suchscheinwerfer",
            es: "Reflector",
            it: "Searchlight",
            pt: "Holofote",
          },
          effect: {
            en: "Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand.",
            ja: "コインをひっくり返します。頭の場合、各プレイヤーは自分の捨てられた山からカードを選択し、それを手に入れることができます。",
            fr: "Retourner une pièce. Si les têtes, chaque joueur peut choisir une carte dans son tas de défausse et la mettre dans sa main.",
            de: "Eine Münze drehen. Wenn Köpfe, kann jeder Spieler eine Karte von seinem Ablagerungsstapel auswählen und sie in seine Hand stecken.",
            es: "Voltea una moneda. Si las cabezas, cada jugador puede elegir una carta de su pila de descarte y ponerla en su mano.",
            it: "Capovolgi una moneta. Se la testa, ogni giocatore può scegliere una carta dalla sua pila di scarto e metterlo nella sua mano.",
            pt: "Vire uma moeda. Se as cabeças, cada jogador pode escolher uma carta de sua pilha de descarte e colocá -la em sua mão.",
          },
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Spark",
            ja: "スパーク",
            fr: "Étincelle",
            de: "Funke",
            es: "Chispa",
            it: "Scintilla",
            pt: "Fagulha",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手がベンチでポケモンを持っている場合は、1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und dieser Angriff schädigt es 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si tu oponente tiene algún Pokémon en banca, elija 1 de ellos y este ataque le da 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se il tuo avversario ha un Pokemon in panchina, scegline 1 e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
