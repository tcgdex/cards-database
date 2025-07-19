import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misdreavus",
         ja: "ミスレアヴァス",
         fr: "Malseaux",
         de: "Miseravus",
         es: "Desgracia",
         it: "Misreavus",
         pt: "MISDRAVUS",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [200],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Deep Sleep",
            ja: "深い眠り",
            fr: "Sommeil profond",
            de: "Tiefer Schlaf",
            es: "Sueño profundo",
            it: "Sonno profondo",
            pt: "Sono profundo",
          },
          effect: {
            en: "As long as Misdreavus is your Active PokÃ©mon, each player flips 2 coins for his or her PokÃ©mon that is Asleep between turns. If either coin is tails, that PokÃ©mon is still Asleep.",
            ja: "Misdreavusがあなたのアクティブなポカモンである限り、各プレイヤーは、ターンの間に眠っている彼または彼女のポカモンのために2つのコインをひっくり返します。いずれかのコインが尾の場合、そのポカンはまだ眠っています。",
            fr: "Tant que Misdreavus est votre poké actif, chaque joueur retourne 2 pièces pour son poké-mon qui dort entre les virages. Si l'une ou l'autre pièce est que la queue, ce pokã © Mon est toujours endormi.",
            de: "Solange Miskravus Ihr aktiver Pokémon ist, flieht jeder Spieler 2 Münzen für seinen oder ihren Poké Mon, der zwischen den Kurven schläft. Wenn beide Münze Schwänze sind, schläft dieser Poké Mon Mon noch.",
            es: "Mientras Mdreavus sea su Poké Mon activo, cada jugador voltea 2 monedas para su Poké Mon que está dormido entre turnos. Si cualquiera de las monedas es cola, ese Poké Mon todavía está dormido.",
            it: "Fintanto che i misreavus sono il tuo poké attivo, ogni giocatore lancia 2 monete per il suo poké mon che dorme tra i turni. Se una delle monete è coda, quel poké mon è ancora addormentato.",
            pt: "Enquanto o Misdravus for o seu Poké de Mon ativo, cada jogador vira 2 moedas para o seu Poké Mon, que está dormindo entre as voltas. Se qualquer uma das moedas for cauda, esse Poké Mon ainda está dormindo.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Return Trance",
            ja: "トランスを返します",
            fr: "Retour transe",
            de: "Trance zurückgeben",
            es: "Devolver trance",
            it: "Trenza di ritorno",
            pt: "Retornar transe",
          },
          effect: {
            en: "Return an Energy card attached to Misdreavus to your hand. The Defending Pokemon is now Asleep.",
            ja: "Return an Energy card attached to Misdreavus to your hand.防御ポケモンは今眠っています。",
            fr: "Renvoyez une carte d'énergie attachée à Misdreavus à votre main. Le Pokémon en défense est maintenant endormi.",
            de: "Geben Sie eine Energiekarte zurück, die an Miskravus an Ihre Hand gebunden ist. Das verteidigende Pokemon schläft jetzt.",
            es: "Devuelva una tarjeta de energía unida a Misdreavus a su mano. El Pokémon defensor ahora está dormido.",
            it: "Restituisce una carta energetica collegata a miscedravi alla tua mano. Il Pokemon in carica è ora addormentato.",
            pt: "Retorne um cartão de energia ligado ao Misdreavus à sua mão. O Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Psychic"],
          name: {
            en: "Dream Eater",
            ja: "夢の食べる人",
            fr: "Mangeur de rêve",
            de: "Traumfresser",
            es: "Dream Eater",
            it: "Mangiatore da sogno",
            pt: "Dream Eater",
          },
          effect: {
            en: "If the Defending Pokemon is not Asleep, this attack does nothing.",
            ja: "防御するポケモンが眠っていない場合、この攻撃は何もしません。",
            fr: "Si le Pokémon en défense n'est pas endormi, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon nicht schläft, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor no está dormido, este ataque no hace nada.",
            it: "Se il Pokemon in difesa non dorme, questo attacco non fa nulla.",
            pt: "Se o Pokémon atual não estiver dormindo, esse ataque não faz nada.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
