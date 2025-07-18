import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Relicanth",
         ja: "Relecanth",
         fr: "Relicanthe",
         de: "Relicanth",
         es: "Reliquia",
         it: "Relificanth",
         pt: "RELICANTH",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [369],
      hp: 60,
      types: ["Water"],
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
            en: "As long as Relicanth is your Active PokÃ©mon, a player flips 2 coins for each of his or her PokÃ©mon that is Asleep between turns. If either coin is tails, that PokÃ©mon is still Asleep.",
            ja: "Relicanthがあなたのアクティブなポカモンである限り、プレーヤーは、ターンの間に眠っている彼または彼女のポカモンのそれぞれに2つのコインをひっくり返します。いずれかのコインが尾の場合、そのポカンはまだ眠っています。",
            fr: "Tant que la religanth est votre poké actif, un joueur retourne 2 pièces pour chacune de ses poké-mon, qui dort entre les virages. Si l'une ou l'autre pièce est que la queue, ce pokã © Mon est toujours endormi.",
            de: "Solange Relicanth Ihr aktiver Poké Mon Mon ist, flieht ein Spieler 2 Münzen für jeden seiner Poké Mon, der zwischen den Kurven schläft. Wenn beide Münze Schwänze sind, schläft dieser Poké Mon Mon noch.",
            es: "Mientras Relicanth sea su Poké Mon activo, un jugador voltea 2 monedas para cada uno de sus Poké Mon que está dormido entre turnos. Si cualquiera de las monedas es cola, ese Poké Mon todavía está dormido.",
            it: "Finché ReliCanth è il tuo poké attivo, un giocatore capovolge 2 monete per ciascuno dei suoi poké mon che dorme tra i turni. Se una delle monete è coda, quel poké mon è ancora addormentato.",
            pt: "Enquanto a Relpanth for o seu Poké Mon ativo, um jogador vira 2 moedas para cada um de seu Poká © Mon, que está dormindo entre as voltas. Se qualquer uma das moedas for cauda, esse Poké Mon ainda está dormindo.",
          },
      }],

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Yawn",
            ja: "あくび",
            fr: "Bâillement",
            de: "Gähnen",
            es: "Bostezo",
            it: "Sbadiglio",
            pt: "Bocejar",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Asleep.",
            ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。",
            fr: "Retourner une pièce. Si la tête, le Pokémon en défense est maintenant endormi.",
            de: "Eine Münze drehen. Wenn Köpfe, schläft das verteidigende Pokemon jetzt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está dormido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora addormentato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está dormindo.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
