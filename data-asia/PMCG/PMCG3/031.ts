import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Gengar",
         ja: "ジェンガー",
         fr: "Gengar",
         de: "Gengar",
         es: "Gengar",
         it: "Gengar",
         pt: "Gengar",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Curse",
            ja: "呪い",
            fr: "Malédiction",
            de: "Fluch",
            es: "Maldición",
            it: "Maledizione",
            pt: "Xingamento",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may move 1 damage counter from 1 of your opponent's Pokmon to another <em>(even if it would Knock Out the other Pokmon)</em>. This power can't be used if Gengar is affected by a Special Condition.",
            ja: "ターン中（攻撃の前）</em> </em>、1人のダメージカウンターを対戦相手のポクモンの1人から別の<em>に移動できます（他のポクモンをノックアウトしたとしても）</em>。 Gengarが特別な状態の影響を受けている場合、このパワーは使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez déplacer 1 compteur de dégâts de 1 du pokmon de votre adversaire à un autre <em> (même si cela éliminerait l'autre Pokmon) </em>. Ce pouvoir ne peut pas être utilisé si Gengar est affecté par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie 1 Schadenschalter von 1 der Pokmon Ihres Gegners zu einem anderen <em> verschieben (auch wenn es das andere Pokmon ausschalten würde) </em>. Diese Kraft kann nicht verwendet werden, wenn Gengar von einem besonderen Zustand betroffen ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede mover 1 contador de daño de 1 de los Pokmon de su oponente a otro <em> (incluso si noqueaba al otro Pokmon) </em>. Esta potencia no se puede usar si Gengar se ve afectado por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi spostare 1 contatore di danni da 1 dei Pokmon del tuo avversario a un altro <em> (anche se avrebbe eliminato l'altro Pokmon) </em>. Questo potere non può essere usato se Gengar è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode mover 1 contador de danos de 1 do Pokmon do seu oponente para outro <em> (mesmo que isso derrubasse o outro Pokmon) </em>. Esse poder não pode ser usado se Gengar for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Psychic"],
          name: {
            en: "Dark Mind",
            ja: "暗い心",
            fr: "Esprit sombre",
            de: "Dunkler Verstand",
            es: "Mente oscura",
            it: "Mente oscura",
            pt: "Mente sombria",
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

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
