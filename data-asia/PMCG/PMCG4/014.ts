import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Rapidash",
         ja: "Dark Rapidash",
         fr: "Rapidash sombre",
         de: "Dunkler Rapidash",
         es: "RataSh oscuro",
         it: "Dark Rapidash",
         pt: "Dark Rapidash",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [78],
      hp: 60,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rear Kick",
            ja: "リアキック",
            fr: "Coup de pied arrière",
            de: "Heck -Kick",
            es: "Patada trasera",
            it: "Calcio posteriore",
            pt: "Chute traseiro",
          },
          damage: 20,
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Flame Pillar",
            ja: "炎の柱",
            fr: "Pilier de flamme",
            de: "Flammensäule",
            es: "Pilar de las llamas",
            it: "Pilastro di fiamma",
            pt: "Pilar de chama",
          },
          effect: {
            en: "You may discard 1 Fire Energy card attached to Dark Rapidash when you use this attack. If you do and if your opponent has any Benched Pokemon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "この攻撃を使用すると、Dark Rapidashに取り付けられた1つのFire Energyカードを破棄できます。そうであり、相手がベンチでポケモンを持っている場合は、そのうち1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Vous pouvez éliminer 1 carte d'énergie de feu attachée à Dark Rapidash lorsque vous utilisez cette attaque. Si vous le faites et si votre adversaire a un Pokémon banc, choisissez 1 d'entre eux et cette attaque en fait 10 dégâts. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Sie können 1 Feuerergiekarte verwerfen, die an Dark Rapidash angebracht ist, wenn Sie diesen Angriff verwenden. Wenn Sie dies tun und wenn Ihr Gegner ein pokémon mit Bank hat, wählen Sie 1 davon und dieser Angriff schädigt es 10. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Puede descartar 1 tarjeta de energía de fuego unida a Rapidash oscuro cuando usa este ataque. Si lo haces y si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y este ataque le da 10 daños. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "È possibile scartare 1 carta di energia antincendio attaccata a Dark Rapidash quando si utilizza questo attacco. Se lo fai e se il tuo avversario ha qualche Pokemon in panchina, scegli 1 e questo attacco fa 10 danni ad esso. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Você pode descartar 1 cartão de energia de incêndio anexado ao Rapidash Dark quando usa esse ataque. Se você o fizer e se seu oponente tiver algum Pokémon em banco, escolha 1 deles e este ataque causará 10 danos a ele. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
