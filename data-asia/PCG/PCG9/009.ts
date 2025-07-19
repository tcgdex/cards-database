import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Heracross (Delta Species)",
         ja: "ヘラクロス（デルタ種）",
         fr: "Héracross (espèces delta)",
         de: "Heracross (Delta -Arten)",
         es: "Heracross (especie delta)",
         it: "Heracross (Delta Species)",
         pt: "Heracross (espécie Delta)",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [214],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Shining Horn",
            ja: "輝くホーン",
            fr: "Corne brillante",
            de: "Leuchtendes Horn",
            es: "Bocina",
            it: "Corno splendente",
            pt: "Chifre brilhante",
          },
          effect: {
            en: "As long as Heracross is the only PokÃ©mon you have in play, your opponent's Basic PokÃ©mon can't attack.",
            ja: "ヘラクロスがあなたがプレイしている唯一のポカモンである限り、あなたの対戦相手の基本的なポカモンは攻撃できません。",
            fr: "Tant qu'Heracross est le seul poké que vous avez en jeu, le poké de base de votre adversaire ne peut pas attaquer.",
            de: "Solange Heracross der einzige Pokémon ist, den Sie im Spiel haben, kann der grundlegende Poké -Mong Ihres Gegners nicht angreifen.",
            es: "Mientras Heracross sea el único Poké Mon que tienes en juego, el Poké básico de tu oponente no puede atacar.",
            it: "Finché Heracross è l'unico poké mon che hai in gioco, il poké di base del tuo avversario non può attaccare.",
            pt: "Enquanto Heracross for o único Poké Mon que você tem em jogo, o Poké Mon Basic Mon do seu oponente não pode atacar.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dig Deep",
            ja: "深く掘ります",
            fr: "Creuser profondément",
            de: "Tief graben",
            es: "Cavar profundamente",
            it: "Scavare in profondità",
            pt: "Cavar profundamente",
          },
          effect: {
            en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
            ja: "廃棄パイルを検索して、エネルギーカードを紹介し、相手に見せて、手に入れてください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie, montrez-la à votre adversaire et mettez-la dans votre main.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Energiekarte, zeigen Sie sie Ihrem Gegner an und geben Sie sie in Ihre Hand.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía, muéstrela a su oponente y póngala en su mano.",
            it: "Cerca il tuo mucchio di scarti per una carta energetica, mostralo al tuo avversario e mettilo in mano.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia, mostre -o ao seu oponente e coloque -o em sua mão.",
          },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Extra Claws",
            ja: "余分な爪",
            fr: "Griffes supplémentaires",
            de: "Zusätzliche Krallen",
            es: "Garras adicionales",
            it: "Claws extra",
            pt: "Garras extras",
          },
          effect: {
            en: "If the Defending Pokemon is Pokemon-ex, this attack does 30 damage plus 20 more damage.",
            ja: "防御ポケモンがポケモンエクスの場合、この攻撃は30ダメージと20ダメージを与えます。",
            fr: "Si le Pokémon en défense est Pokemon-EX, cette attaque fait 30 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokemon Pokemon-EX ist, verursacht dieser Angriff 30 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si el Pokémon defensor es Pokémon-EX, este ataque hace 30 daños más 20 más de daño.",
            it: "Se il Pokemon in carica è Pokemon-Ex, questo attacco infligge 30 danni più 20 danni.",
            pt: "Se o pokemon atual for Pokemon-Ex, esse ataque causará 30 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
